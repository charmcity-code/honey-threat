class Threat < ApplicationRecord
  attribute :lat, :string, default: nil
  attribute :long, :string, default: nil
  attribute :address, :string, default: nil
end
