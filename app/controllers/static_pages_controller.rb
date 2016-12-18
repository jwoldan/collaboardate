class StaticPagesController < ApplicationController

  def root
    render :root
  end

  def letsencrypt
    render text: "YmSsYIkgv8uQl9wBpiI7J6Uqhv_-AwIWCtROPHZVkck.VfMRNQ7Qxp_G8A9nwescx8sHqcxpiC8b4CXz2uqH24A"
  end

end
