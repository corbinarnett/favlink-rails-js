class ListSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :id
  # has_many :websites

  # private
  # attributes :websites
  # def websites
  #     WebstieSerializer.new(object.websites).attributes
  # end
end
