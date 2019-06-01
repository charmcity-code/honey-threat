class Api::ThreatsController < ApplicationController

  before_action :set_threat, only: [:show, :edit, :update]

  def index
    render json: Threat.all
  end

  def create
    threat = Threat.new(threat_params)
    if threat.save
      render json:threat
    else
      render json: { message: threat.errors }, status: 400
    end
  end

  def show
    render json: @threat
  end

  def update
    if @threat.update(threat_params)
      render json: @threat
    else
      render json: { message: threat.errors }, status: 400
    end
  end

  def destroy
    @threat = Threat.find(params[:id])
    if @threat.destroy
      render status: 204
    else
      render json: { message: "Unable to remove this threat" }, status: 400
    end
  end

  private

  def set_threat
    @threat = Threat.find_by(id: params[:id])
  end

  def threat_params
    params.require(:threat).permit(:ip, :count, :lat, :long, :address)
  end

end