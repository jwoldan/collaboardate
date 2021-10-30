# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Card, type: :model do
  let(:list) { FactoryBot.create(:list) }
  let(:list2) { FactoryBot.create(:list) }
  # rubocop:disable RSpec/LetSetup
  let!(:object1) { FactoryBot.create(:card, list: list) }
  let!(:object2) { FactoryBot.create(:card, list: list) }
  let!(:object3) { FactoryBot.create(:card, list: list) }
  # rubocop:enable RSpec/LetSetup

  it 'is orderable' do
    expect_to_be_orderable
  end

  describe '#handle_list_change' do
    before do
      allow(described_class).to receive(:update_other_ords)
    end

    # rubocop:disable RSpec/MultipleExpectations, RSpec/ExampleLength
    it 'updates ords in both the new and old list' do
      card = object1
      new_ord = 0
      next_ord = described_class.next_ord(list2.id)
      card.update(list: list2, ord: new_ord)

      expect(described_class)
        .to have_received(:update_other_ords)
        .with(list.id, card.ord, described_class.max_ord(list.id))
      expect(described_class)
        .to have_received(:update_other_ords)
        .with(list2.id, next_ord, new_ord)
    end
    # rubocop:enable RSpec/MultipleExpectations, RSpec/ExampleLength
  end
end
