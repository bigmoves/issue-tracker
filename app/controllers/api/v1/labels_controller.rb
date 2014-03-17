class Api::V1::LabelsController < ApplicationController
  before_action :set_label, only: [:show, :update, :destroy]
  respond_to :json

  # GET /labels
  def index
    respond_with Label.all
  end

  # GET /labels/1
  def show
    respond_with @label
  end

  # POST /labels
  def create
    @label = Label.new(label_params)

    if @label.save
      respond_with @label, status: :created, location: [:api, :v1, @label]
    else
      render json: { errors: @label.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /labels/1
  def update
    if @label.update(label_params)
      respond_with @label, status: :ok, location: [:api, :v1, @label]
    else
      render json: { errors: @label.errors }, status: :unprocessable_entity
    end
  end

  # DELETE /labels/1
  def destroy
    @label.destroy
    head :no_content
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_label
    @label = Label.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def label_params
    params.require(:label).permit(:name, :color)
  end
end
