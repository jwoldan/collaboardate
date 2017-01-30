require 'rails_helper'

RSpec.describe Card, type: :model do
  let(:list) { FactoryGirl.create(:list) }
  let(:object_1) { FactoryGirl.create(:card, list: list) }
  let(:object_2) { FactoryGirl.create(:card, list: list) }
  let(:object_3) { FactoryGirl.create(:card, list: list) }

  it 'is orderable' do
    expect_to_be_orderable
  end

end
