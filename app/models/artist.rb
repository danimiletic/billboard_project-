class Artist < ApplicationRecord
  belongs_to :billboard
  validates :name, :rank, presence: true 
end
