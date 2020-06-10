class FileParser

  def to_binary_file(content)

     file = File.new("data/data.txt", "w")

     numbers = content.split(';').map(&:to_i)
     numbers.each do |number|
        file.puts "#{number.to_s(2)}"
     end

     file.close
  end

  private
  def read_file(file)
    File.open(Dir.pwd + "/data/#{file}").read
  end
end
