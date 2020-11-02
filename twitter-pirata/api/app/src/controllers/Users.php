<?php

use Kak\Twitter\User;
use Pipa\Dispatch\Session;

class Users {

	function signup(Session $session, $email, $name, $password) {
		$user = User::create($email, $name, $password);
		$session->setPrincipal($user);
		return $user->toTransferObject();
	}

	function getSessionUser(Session $session) {
		$user = $session->getPrincipal();

		if ($user) {
			return $user->toTransferObject();
		}
	}
}