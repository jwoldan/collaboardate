def expect_to_be_orderable
  expect(object_1.ord).to be(0)
  expect(object_2.ord).to be(1)
  expect(object_3.ord).to be(2)
  expect(object_1.next_ord).to be(3)
  object_1.ord = 2
  object_1.save
  expect(object_2.reload.ord).to be(0)
  expect(object_3.reload.ord).to be(1)
end
