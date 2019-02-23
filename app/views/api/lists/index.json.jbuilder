# frozen_string_literal: true

@lists.each do |list|
  json.set! list.id do
    json.partial! 'api/lists/list_summary', list: list
  end
end
