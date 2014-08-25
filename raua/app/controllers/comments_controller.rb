class CommentsController < ApplicationController
 
  before_action :set_comment, only: [:show, :edit, :update, :destroy]

  # GET /comments
  # GET /comments.json
  def index
    @presenter = {
        :comments => Comment.all,
        :form => {
          :action => comments_path,
          :csrf_param => request_forgery_protection_token,
          :csrf_token => form_authenticity_token
        }
    }
  end

  # GET /comments/1
  # GET /comments/1.json
  def show
    @presenter = {
        :comments => @comment,
        :form => {
          :action => comments_path,
          :csrf_param => request_forgery_protection_token,
          :csrf_token => form_authenticity_token
        }
    }
  end

  # GET /comments/new
  def new
    @presenter = {
        :comments => Comment.new,
        :form => {
          :action => comments_path,
          :csrf_param => request_forgery_protection_token,
          :csrf_token => form_authenticity_token
        }
    }
  end

  # GET /comments/1/edit
  def edit
    @presenter = {
        :comments => @comment,
        :form => {
          :action => comments_path(params[:id]),
          :csrf_param => request_forgery_protection_token,
          :csrf_token => form_authenticity_token
        }
    }
  end

  # POST /comments
  # POST /comments.json
  def create
    @comment = Comment.new(comment_params)
    @comment.save
    if request.xhr?
      render :json => Comment.last(5)
    else
      redirect_to comments_path
    end
  end

  # PATCH/PUT /comments/1
  # PATCH/PUT /comments/1.json
  def update
    respond_to do |format|
      if @comment.update(comment_params)
        format.html { redirect_to @comment, notice: 'Comment was successfully updated.' }
        format.json { render :show, status: :ok, location: @comment }
      else
        format.html { render :edit }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /comments/1
  # DELETE /comments/1.json
  def destroy
    Comment.find(params[:id]).destroy
    respond_to do |format|
      format.html { redirect_to comments_url, notice: 'Comment was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def comment_params
       params.require(:comment).permit(:author, :text)
    end
end
