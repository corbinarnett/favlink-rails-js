class ListSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :id
  has_many :websites
end
