require 'em-websocket'

_continue = true

EM.run{
	EM::WebSocket.run :host => "localhost", :port => 8080, :debug => false do |ws|
		ws.onopen { |handshake|
			puts "Cliente Connected: #{handshake.path}"
			ws.send "Message of Server"
		}
		ws.onclose {
			puts "Cliente Desconnected!"
		}
		ws.onerror { |e|
			puts "Error: #{e.message}"
		}
		ws.onmessage { |msg|
			puts msg
		}
	end
}
