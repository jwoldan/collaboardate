require 'rails_helper'

RSpec.describe List, type: :model do
  let(:board) { FactoryGirl.create(:board) }
  let(:object_1) { FactoryGirl.create(:list, board: board) }
  let(:object_2) { FactoryGirl.create(:list, board: board) }
  let(:object_3) { FactoryGirl.create(:list, board: board) }

  it 'is orderable' do
    expect_to_be_orderable
  end

end
