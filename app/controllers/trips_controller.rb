class TripsController < ApplicationController

  def twilio_setup
    # put your own credentials here
    account_sid = ENV["twilio_account_sid"]
    auth_token  = ENV["twilio_auth_token"]

    # set up a client to talk to the Twilio REST API
    @client = Twilio::REST::Client.new account_sid, auth_token
  end

  def notify
    twilio_setup
    @client.messages.create(
    from: "+1512-309-7499",
    to: "(908)3707882",
    body: params[:body] || 'Open road ahead! Time to go!'
  )
    render json: { message: "sent" }
  end

end
