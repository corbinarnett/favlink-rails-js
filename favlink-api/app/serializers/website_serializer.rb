class WebsiteSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :link, :list
  # belongs_to :list

  private
  def lists
      ListSerializer.new(object.lists).attributes
  end
end
