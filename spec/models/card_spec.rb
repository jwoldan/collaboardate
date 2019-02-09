# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Card, type: :model do
  let(:list) { FactoryBot.create(:list) }
  let(:list_2) { FactoryBot.create(:list) }
  let(:object_1) { FactoryBot.create(:card, list: list) }
  let(:object_2) { FactoryBot.create(:card, list: list) }
  let(:object_3) { FactoryBot.create(:card, list: list) }

  it 'is orderable' do
    expect_to_be_orderable
  end

  describe '#handle_list_change' do
    it 'updates ords in both the new and old list' do
      card = object_1
      new_ord = 0
      expect(Card)
        .to receive(:update_other_ords)
        .with(list.id, card.ord, Card.max_ord(list.id))
      expect(Card)
        .to receive(:update_other_ords)
        .with(list_2.id, Card.next_ord(list_2.id), new_ord)

      card.list = list_2
      card.ord = new_ord
      card.save
    end
  end
end
