# frozen_string_literal: true

def expect_to_be_orderable # rubocop:disable Metrics/AbcSize
  expect(object1.ord).to be(0)
  expect(object2.ord).to be(1)
  expect(object3.ord).to be(2)
  expect(object1.next_ord).to be(3)

  object1.ord = 2
  object1.save

  expect(object2.reload.ord).to be(0)
  expect(object3.reload.ord).to be(1)
end
