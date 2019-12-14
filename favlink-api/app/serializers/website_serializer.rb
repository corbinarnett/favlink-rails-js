class WebsiteSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :link
  belongs_to :list
end
