<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" type="text/css" href="css/CommonView.css">
	<link rel="stylesheet" type="text/css" href="css/hitokuiiwa/HitokuiiwaView.css">
	<link rel="stylesheet" type="text/css" href="css/hitokuiiwa/HitokuiiwaInfoView.css">
	<link rel="stylesheet" type="text/css" href="css/hitokuiiwa/HitokuiiwaDoorView.css">
	<link rel="stylesheet" type="text/css" href="css/lib/magic/magic.css">
	<script defer src="js/lib/jquery-3.3.1.min.js"></script>
	<script defer src="js/hitokuiiwa/HitokuiiwaRoomModel.js"></script>
	<script defer src="js/hitokuiiwa/HitokuiiwaRoomController.js"></script>
	<title>人喰い岩の洞窟 ― 白と黒のとびら</title>
</head>
<body>
	<jsp:include page="../HeaderView.jsp" />
	<div class="main-contents">
		<jsp:include page="HitokuiiwaInfoView.jsp" />
 		<div class="main-contents-room"></div>
		<div class="main-contents-bottom">
			<button class="main-contents-bottom-restart font-family-fontopo">
				<font">やり直す</font>
			</button>
		</div>
	</div>
</body>
</html>