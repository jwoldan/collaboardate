require 'rails_helper'

RSpec.describe List, type: :model do
  let(:board) { FactoryBot.create(:board) }
  let(:object_1) { FactoryBot.create(:list, board: board) }
  let(:object_2) { FactoryBot.create(:list, board: board) }
  let(:object_3) { FactoryBot.create(:list, board: board) }

  it 'is orderable' do
    expect_to_be_orderable
  end

end
