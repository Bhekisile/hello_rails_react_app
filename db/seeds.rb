# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
Message.create(message_text: "Hello, Rails and React!")
Message.create(message_text: "This data is coming from the Rails API!")
Message.create(message_text: "Rails and React are a great combo!")
Message.create(message_text: "The React component is fetching data from the Rails API. The UI is updated as the user refreshes the page. The data is persisted in the database. And the UI is flexible taking in long sentences to display in the message box.")
Message.create(message_text: "Happy coding with Rails and React!")
