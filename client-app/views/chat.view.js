export default `
<h1>Conversation</h1>
<strong>Your nickname is {{info.nickName}}</strong>

<br />
<button type='button' class='btn btn-danger' ng-click='leaveConvo()'>leave conversation</button>


<div class='controller'>
	<div class='row'>
		<div class='col col-md-8'>
		<!-- messages start -->
		<h3>messages</h3>
		<div id='msg-area'>
			<div class='msg' ng-repeat='m in messages track by $index' ng-style="{'font-family': m.font, 'color': m.fontColor, 'background-color': m.backgroundColor, 'outline': '1px solid' + m.outlineColor}">
				<div ng-style="{'background-image': 'url(' + m.imageUrl + ')'}"></div>
			{{m.nickName}} at {{m.time | date:'h:m:s'}} said: "{{m.comment}}"
			</div>
			<div id='scroll-to'></div>
		</div>

		<!-- messages end -->
		</div>

		<div class='col col-md-4'>
		<!-- online people start -->
		<h3>online users</h3>
		<button type='button' class='btn btn-info' ng-click='toggCustShow("online")'>
			<span class="glyphicon glyphicon-eye-close" ng-show='showOnline'></span>
			<span class="glyphicon glyphicon-eye-open" ng-show='!showOnline'></span>
		</button>
		<div id='online-area' ng-show='showOnline'>
			<ul>
				<li ng-repeat='u in joinedUsers track by $index'>{{u.nickName}} joined at {{u.joined | date:'yyyy-MM-dd h:m:s'}}</li>
			</ul>
		</div>
		<!-- online people end -->


		<!-- activity start -->
		<h3>activity</h3>
		<button type='button' class='btn btn-info' ng-click='toggCustShow("activity")'>
			<span class="glyphicon glyphicon-eye-close" ng-show='showActivity'></span>
			<span class="glyphicon glyphicon-eye-open" ng-show='!showActivity'></span>
		</button>
		<div id='activity-area' ng-show='showActivity'>
			<ul>
				<li style='color: red;' ng-repeat='u in leftUsers track by $index'>{{u.nickName}} left the conversation at {{u.left | date:'h:m:s'}}</li>
				<li style='color: blue;' ng-repeat='u in usersTyping track by $index'>{{u.nickName}} is typing...</li>
			</ul>
		</div>
		<!-- activity end -->
		</div>
	</div>

		<div class='row'>
			<div class='col col-md-6'>
				<!-- comment start -->
				<h3>comment</h3>
			</div>
		</div>
		<div class='row'>
			<div class='col col-md-6'>
				<textarea id='comment-box' ng-model='comment' ng-keyup='notifyTyping(); sendEnter($event.keyCode)'></textarea>
				<!-- comment end -->
			</div>

			<div class='col col-md-6'>
				<!-- send button start -->
				<button id='send-btn' type='button' class='btn btn-info' ng-click='send()' ng-disabled='!comment.length'>send</button>
				</div>
				<!-- send button end -->
			</div>

		</div>

</div>

<style>
	*{
		/*outline: 1px solid red;*/
	}
	body{
		overflow-x: hidden;
	}

	#comment-box{
		border: 2px solid;
		height: 7vmin;
		overflow-y: scroll;
		resize: none;
		width: 100%;
	}

	#send-btn{
		margin-top: 5px;
		margin-left: 5px;
	}

	#msg-area{
		border: 2px solid black;
		height: 64vmin;
		margin-bottom: 15px;
		overflow-y: scroll;
		padding: 7px;
	}

	#activity-area, #online-area{
		border: 2px solid black;
		height: 23vmin;
		margin-bottom: 15px;
		overflow-y: scroll;
		padding: 7px;
	}

	.msg{
		margin-bottom:10px;
	}

	.msg div{
		width: 60px;
		height: 50px;
		background-size: cover;
		margin-top: 5px;
		margin-left: 5px;
		display: inline-block;
	}


</style>
`;