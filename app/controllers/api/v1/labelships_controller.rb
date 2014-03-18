class Api::V1::LabelshipsController < ApplicationController
  before_action :set_labelship, only: [:show, :update, :destroy]
  respond_to :json

  # GET /labelships
  def index
    respond_with Labelship.all
  end

  # GET /labelships/1
  def show
    respond_with @labelship
  end

  # POST /labelships
  def create
    @labelship = Labelship.new(labelship_params)

    if @labelship.save
      respond_with @labelship, status: :created, location: [:api, :v1, @labelship]
    else
      render json: { errors: @labelship.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /labelships/1
  def update
    if @labelship.update(labelship_params)
      respond_with @labelship, status: :ok, location: [:api, :v1, @labelship]
    else
      render json: { errors: @labelship.errors }, status: :unprocessable_entity
    end
  end

  # DELETE /labelships/1
  def destroy
    @labelship.destroy
    head :no_content
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_labelship
    @labelship = Labelship.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def labelship_params
    params.require(:labelship).permit(:issue_id, :label_id)
  end
end
