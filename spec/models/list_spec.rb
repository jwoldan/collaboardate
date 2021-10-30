# frozen_string_literal: true

require 'rails_helper'

RSpec.describe List, type: :model do
  let(:board) { FactoryBot.create(:board) }
  let(:object1) { FactoryBot.create(:list, board: board) }
  let(:object2) { FactoryBot.create(:list, board: board) }
  let(:object3) { FactoryBot.create(:list, board: board) }

  it 'is orderable' do
    expect_to_be_orderable
  end
end
