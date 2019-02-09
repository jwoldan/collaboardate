# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Checklist, type: :model do
  let(:card) { FactoryBot.create(:card) }
  let(:object_1) { FactoryBot.create(:checklist, card: card) }
  let(:object_2) { FactoryBot.create(:checklist, card: card) }
  let(:object_3) { FactoryBot.create(:checklist, card: card) }

  it 'is orderable' do
    expect_to_be_orderable
  end
end
