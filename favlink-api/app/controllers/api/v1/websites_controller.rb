class Api::V1::WebsitesController < ApplicationController
  before_action :set_website, only: [:show, :update, :destroy]

  # GET /websites
  def index
    @websites = Website.all
    # options = {}
    # options[:include] = [:list]
    render json: WebsiteSerializer.new(@websites), status: 200
  end

  # GET /websites/1
  def show
    # options = {}
    # options[:include] = [:list]
    render json: WebsiteSerializer.new(@website), status: 200
  end

  # POST /websites
  def create
    # binding.pry
    # @list = List.find_by(title: list_params[:title])
    # @website = @list.websites.build(website_params)
    @website = Website.new(website_params)

    if @website.save
      render json: WebsiteSerializer.new(@website), status: 200
    else
      render json: @website.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /websites/1
  # def update
  #   if @website.update(website_params)
  #     render json: @website
  #   else
  #     render json: @website.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /websites/1
  def destroy
    @website.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_website
      @website = Website.find(params[:id])
    end

    # def list_params
    #   params.require(:list).permit(:title)
    # end
    # Only allow a trusted parameter "white list" through.
    def website_params
      params.require(:website).permit(:title, :link, :list_id)
    end
end

# hello