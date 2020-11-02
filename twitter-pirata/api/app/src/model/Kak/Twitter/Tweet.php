<?php

namespace Kak\Twitter;

use DateTime;
use Pipa\ORM\Entity;

/**
 * @Collection("tweets")
 */
class Tweet extends Entity {

	/**
	 * @Id
	 * @Generated
	 */
	public $id;

	/**
	 * @NotNull
	 */
	public $content;

	/**
	 * @NotNull
	 */
	public $created;

	/**
	 * @NotNull
	 * @One(class = "User")
	 */
	public $user;

	public static function create(User $user, $content) {
		$tweet = new self;
		$tweet->user = $user;
		$tweet->content = $content;
		$tweet->created = new DateTime();
		$tweet->save();
		return $tweet;
	}
}