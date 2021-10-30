# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Checklist, type: :model do
  let(:card) { FactoryBot.create(:card) }
  let(:object1) { FactoryBot.create(:checklist, card: card) }
  let(:object2) { FactoryBot.create(:checklist, card: card) }
  let(:object3) { FactoryBot.create(:checklist, card: card) }

  it 'is orderable' do
    expect_to_be_orderable
  end
end
