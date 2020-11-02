<?php

require_once "app/environment.php";

use Pipa\Dispatch\ExpressionRouter;
use Pipa\Dispatch\ViewSelector;
use Pipa\HTTP\HTTPContext;
use Pipa\HTTP\View\JSONView;
use Pipa\HTTP\View\PHPView;
use Pipa\HTTP\View\PartialsFilter;

HTTPContext::hook("http-error", "security", "json");

HTTPContext::get()->dispatch(
	new ExpressionRouter([
		'GET	/'=>'Main::index',

		'POST	users'=>'Users::signup',
		'GET	users/me'=>'Users::getSessionUser',
		'GET	users/{userId}/tweets'=>'Tweets::get',

		'GET	tweets'=>'Tweets::get',
		'GET	tweets/{tweetId}'=>'Tweets::get',

		'POST	tweets'=>'Tweets::create',
		'PUT	tweets/{tweetId}'=>'Tweets::update',
		'DELETE	tweets/{tweetId}'=>'Tweets::delete',
	]),
	new ViewSelector([
		'default'=>new JSONView()
	])
);
