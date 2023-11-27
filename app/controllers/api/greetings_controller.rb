class Api::GreetingsController < ApplicationController
  def random
    generate_random_greeting = Message.order('RANDOM()').first
    render json: { message: generate_random_greeting.message_text }
  end
end
