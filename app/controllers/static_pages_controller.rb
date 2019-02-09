# frozen_string_literal: true

class StaticPagesController < ApplicationController
  def root
    render :root
  end

  # def letsencrypt
  #   render text: "qWPxvmsFSnmOFX8SDqGcdRjfdFifA98VCw40gCO-X6M.VfMRNQ7Qxp_G8A9nwescx8sHqcxpiC8b4CXz2uqH24A"
  # end
end
