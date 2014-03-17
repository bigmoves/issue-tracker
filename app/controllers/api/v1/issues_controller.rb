class Api::V1::IssuesController < ApplicationController
  before_action :set_issue, only: [:show, :update, :destroy]
  respond_to :json

  # GET /issues
  def index
    respond_with Issue.all
  end

  # GET /issues/1
  def show
    respond_with @issue
  end

  # POST /issues
  def create
    @issue = Issue.new(issue_params)

    if @issue.save
      respond_with @issue, status: :created, location: [:api, :v1, @issue]
    else
      render json: { errors: @issue.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /issues/1
  def update
    if @issue.update(issue_params)
      respond_with @issue, status: :ok, location: [:api, :v1, @issue]
    else
      render json: { errors: @issue.errors }, status: :unprocessable_entity
    end
  end

  # DELETE /issues/1
  def destroy
    @issue.destroy
    head :no_content
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_issue
    @issue = Issue.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def issue_params
    params.require(:issue).permit(:title, :body, :state, :user_id, :assignee_id)
  end
end
