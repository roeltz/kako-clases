<?php

namespace Kak\Twitter;

use DateTime;
use Pipa\ORM\Entity;

/**
 * @Collection("users")
 */
class User extends Entity {

	/**
	 * @Id
	 * @Generated
	 */
	public $id;

	/**
	 * @NotNull
	 */
	public $email;

	/**
	 * @NotNull
	 */
	public $name;

	/**
	 * @NotNull
	 * @Transform(name = "hash", param = {algo = "sha512", salt = "82165b82-8838-4ba2-bbc9-4ea14d54f18d"})
	 */
	public $password;

	/**
	 * @NotNull
	 */
	public $created;

	public static function create($email, $name, $password) {
		$user = new self;
		$user->email = $email;
		$user->name = $name;
		$user->password = $password;
		$user->created = new DateTime();
		$user->save();
		return $user;
	}

	function toTransferObject() {
		return [
			"id"=>$this->id,
			"name"=>$this->name
		];
	}
}