class FileParser
  def to_integer(binario)
    binario.to_i(2)
  end

  def convert(path)
    file = File.open(path)

    result = 0
    file.each do |item|
       result+=to_integer(item)
    end 
    
    result
  end

  private
  def read_file(file)
    File.open(Dir.pwd + "/data/#{file}").read
  end
end
