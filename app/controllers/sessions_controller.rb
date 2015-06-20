class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by_email(params[:email])
    # If the user exists AND the password entered is correct.
    if user && user.authenticate(params[:password])
      # Save the user id inside a browser cookie.
      # Specifically, the rails 'session'. This is how we keep the user
      # logged in when they navigate around our website.
      session[:user_id] = user.id
      render json: { message: 'Successfully logged in!' }
    else
      # If user's login doesn't work, send them back to the login form.
      render json: { message: "Username or Email did not match"}, status: 404
    end
  end

  def destroy
    session[:user_id] = nil
    render json: { message: 'Successfully Logged Out.' }
  end


end
