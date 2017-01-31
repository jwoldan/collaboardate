require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) { FactoryGirl.create(:user) }
  let(:board) { FactoryGirl.create(:board, creator: user) }
  let(:board_share) { FactoryGirl.create(:board_share, sharee: user) }

  describe "::find_by_credentials" do

    it "finds the user by email and password" do
      expect(User.find_by_credentials(user.email, user.password)).to eq(user)
    end

    it "finds the user by username and password" do
      expect(User.find_by_credentials(user.username, user.password)).to eq(user)
    end

    it "returns nil if the user's password does not match" do
      password = user.password[0..-2]
      expect(User.find_by_credentials(user.username, password)).to be_nil
    end

  end

  describe "#initialize" do

    it "initializes a default username and initials" do
      expect(user.username).to_not be_nil
      expect(user.initials).to_not be_nil
    end

    it "initializes a session token" do
      expect(user.session_token).to_not be_nil
    end

  end

  describe '#reset_session_token' do

    it "resets the users session token" do
      old_token = user.session_token
      user.reset_session_token!
      expect(user.session_token).to_not eq(old_token)
    end

  end

  describe "#all_boards" do

    it "includes both boards created by the user and shared with the user" do
      expect(user.all_boards).to include(board, board_share.board)
    end
  end

end
