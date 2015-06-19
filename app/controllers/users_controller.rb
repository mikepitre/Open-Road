class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]


  def new
    @user = User.new
  end

  def create
    # user = User.new(user_params)
    user = User.new(email: params[:email], phone: params[:phone], password: params[:password], password_confirmation: params[:password_confirmation] )
    if user.save
      render json: { message: 'User created!' }
    else
      render json: { message: 'Errors Occured.' }
    end
  end

  def index
    render json: User.all
  end

  def show
    render json: User.find(params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:email, :phone, :password, :password_confirmation)
  end

end
