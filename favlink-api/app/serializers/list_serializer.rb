class ListSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :id, :websites
  has_many :websites

  private
  def websites
      WebstieSerializer.new(object.websites).attributes
  end
end
