require 'test_helper'

class LabelshipsControllerTest < ActionController::TestCase
  setup do
    @labelship = labelships(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:labelships)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create labelship" do
    assert_difference('Labelship.count') do
      post :create, labelship: { issue_id: @labelship.issue_id, label_id: @labelship.label_id }
    end

    assert_redirected_to labelship_path(assigns(:labelship))
  end

  test "should show labelship" do
    get :show, id: @labelship
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @labelship
    assert_response :success
  end

  test "should update labelship" do
    patch :update, id: @labelship, labelship: { issue_id: @labelship.issue_id, label_id: @labelship.label_id }
    assert_redirected_to labelship_path(assigns(:labelship))
  end

  test "should destroy labelship" do
    assert_difference('Labelship.count', -1) do
      delete :destroy, id: @labelship
    end

    assert_redirected_to labelships_path
  end
end
