require_relative 'air_traffic_controller'
require_relative 'plane'
require_relative 'weather'

class Airport
  attr_accessor :planes, :airbourne_planes, :capacity

  DEFAULT_CAPACITY = 10

  def initialize(capacity = DEFAULT_CAPACITY, plane = nil)
    @plane = plane
    @capacity = capacity
    @planes = []
    @airbourne_planes = []
  end

  def fleet(plane)
    if plane.landing || plane.landed
      raise 'Airport is full' if full?
      raise 'Plane is already on the ground' if on_ground?(plane)
      @airbourne_planes.delete(plane)
      @planes << plane
    elsif plane.taking_off || plane.taken_off
      raise 'Plane is already in the air' unless airborne?(plane)
      @planes.delete(plane)
      @airbourne_planes << plane
    end
  end

  def check_weather
    @weather = Weather.new.current_weather
  end

  def instruct_to_land(plane = @plane_to_instruct, weather = check_weather)
    raise 'Landing not permitted in stormy weather' if weather == 'Stormy'
    plane.landing = true if plane
  end

  def instruct_to_take_off(plane = @plane_to_instruct, weather = check_weather)
    raise 'Takeoff not permitted in stormy weather' if weather == 'Stormy'
    plane.taking_off = true if plane
  end

  private

  def on_ground?(plane)
    @planes.include?(plane)
  end

  def airborne?(plane)
    @planes.include?(plane)
  end

  def full?
    @planes.size >= @capacity
  end

end
