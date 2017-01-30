require 'rails_helper'

RSpec.describe Checklist, type: :model do
  let(:card) { FactoryGirl.create(:card) }
  let(:object_1) { FactoryGirl.create(:checklist, card: card) }
  let(:object_2) { FactoryGirl.create(:checklist, card: card) }
  let(:object_3) { FactoryGirl.create(:checklist, card: card) }

  it 'is orderable' do
    expect_to_be_orderable
  end

end
