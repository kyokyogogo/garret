/**
 *	Output the next state of Hitokuiiwa's room and draw.
 */

 	var update_hitokuiiwa_room = {
			update_room : function(selected_door){
				next_room_info = room_info.get_next_room_info(status_record.current_room, selected_door);
				status_record.set_current_room(next_room_info.next_room);
				hitokuiiwa_room_view_manager.open_selected_door(selected_door);
				hitokuiiwa_room_view_manager.fade_out_and_load_next_room(next_room_info.room_type);
			 },

			 init_room : function() {
			 		status_record.init_status_record();
			 		next_room_drawer.draw_type_normal();
			 }
	}



	var status_record = {
			current_room : "entrance",
			past_room : [],
			init_status_record : function(){
				this.current_room = "entrance";
				this.past_room = [];
			},
			get_current_room : function (){
				return this.current_room;
			},
			set_current_room : function (next_room){
				this.current_room = next_room;
			},
			get_past_room : function (){
				return this.past_room;
			},
			add_past_room : function (last_room){
				this.past_room[this.past_room.length] = last_room;
			}
	}


	var room_info = {
		entrance : {
			room_type : "normal",
			white_door : "room_a",
			black_door : "room_b"
		},

		room_a : {
			room_type : "normal",
			white_door : "room_c",
			black_door : "room_b"
		},

		room_b : {
			room_type : "opened_eye",
			white_door : "room_d",
			black_door : "room_e"
		},

		room_c : {
			room_type : "closed_eye",
			white_door : "nipopong",
			black_door : "room_f"
		},

		room_d : {
			room_type : "normal",
			white_door : "room_f",
			black_door : "nipopong"
		},

		room_e : {
			room_type : "normal",
			white_door : "exit",
			black_door : "nipopong"
		},

		room_f : {
			room_type : "normal",
			white_door : "nipopong",
			black_door : "exit"
		},

		exit : {
			room_type : "exit",
			white_door : null,
			black_door : null
		},

		nipopong : {
			room_type :  "nipopong",
			white_door : null,
			black_door : null
		},

		get_next_room_info : function (past_room, selected_door){
			var next_room = room_info[past_room][selected_door];
			var room_type = room_info[next_room].room_type;
			var next_room_info = {
						next_room : next_room,
						room_type : room_type
				}

				return next_room_info;
		}
	}



	var hitokuiiwa_room_view_manager = {
		open_selected_door : function(selected_door){
			var opened_door = $("#"+selected_door);
			opened_door.addClass("magictime perspectiveLeft")
		},

		fade_out_and_load_next_room : function(room_type){
			var main_contents_room_template = $(".main-contents-room-template");
			main_contents_room_template.fadeOut("slow", function(){
				switch(room_type){
					case "normal":
						next_room_drawer.draw_type_normal();
						break;
					case "opened_eye":
						next_room_drawer.draw_type_opened_eye();
						break;
					case "closed_eye":
						next_room_drawer.draw_type_closed_eye();
						break;
					case "nipopong":
						next_room_drawer.draw_type_nipopong();
						break;
					case "exit":
						next_room_drawer.draw_type_exit();
						break;
				}
		})}
	}

	var next_room_drawer = {
		draw_type_normal : function(){
			$(".main-contents-room").load("template/HitokuiiwaTemplate.html #hitokuiiwa-normal");
			$('.main-contents-room').css('display', 'none').fadeIn("slow");
		},
		draw_type_opened_eye : function(){
			$(".main-contents-room").load("template/HitokuiiwaTemplate.html #hitokuiiwa-opened-eye");
			$('.main-contents-room').css('display', 'none').fadeIn("slow");
		},
		draw_type_closed_eye : function(){
			$(".main-contents-room").load("template/HitokuiiwaTemplate.html #hitokuiiwa-closed-eye");
			$('.main-contents-room').css('display', 'none').fadeIn("slow");
		},
		draw_type_nipopong : function(){
			$(".main-contents-room").load("template/HitokuiiwaTemplate.html #hitokuiiwa-nipopong");
			$('.main-contents-room').css('display', 'none').fadeIn("slow");
		},
		draw_type_exit : function(){
			$(".main-contents-room").load("template/HitokuiiwaTemplate.html #hitokuiiwa-exit");
			$('.main-contents-room').css('display', 'none').fadeIn("slow");
		}
	}