class Billboard < ApplicationRecord
  has_many :artists, dependent: :destroy 
  validates :name, :description, :image, presence: true 
end
