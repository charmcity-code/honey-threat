class Threat < ApplicationRecord
  attribute :count, :integer, default: nil
  attribute :lat, :string, default: nil
  attribute :long, :string, default: nil
  attribute :address, :string, default: nil
end
