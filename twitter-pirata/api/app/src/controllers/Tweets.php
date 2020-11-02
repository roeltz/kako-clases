<?php

use Kak\Twitter\Tweet;
use Pipa\Dispatch\Session;
use Pipa\Data\Restrictions as R;

class Tweets {

	/** @Secured */
	function create(Session $session, $content) {
		$user = $session->getPrincipal();
		$tweet = Tweet::create($user, $content);
		return $this->get($tweet->id);
	}

	function update(Session $session, $tweetId, $content) {
		$tweet = new Tweet($tweetId);
		$this->checkOwner($tweet, $session);
		$tweet->content = $content;
		$tweet->update();
		return $tweet;
	}

	function delete(Session $session, $tweetId) {
		$tweet = new Tweet($tweetId);
		$this->checkOwner($tweet, $session);
		$tweet->delete();
		return true;
	}

	function get($tweetId, $userId = null, $n = 5, $beforeId = null, $afterId = null) {
		$criteria = Tweet::getCriteria()
			->bring("user", true)
				->map("toTransferObject")
				->done()
		;

		if ($userId) {
			$criteria->eq("user", $userId);
		}

		if ($tweetId) {
			return $criteria
				->eq("id", $tweetId)
				->querySingleOrFail()
			;
		} else {
			if ($beforeId) {
				$criteria->where(R::lt("id", $beforeId));
			} elseif ($afterId) {
				$criteria->where(R::gt("id", $afterId));
			}

			if (!$afterId) {
				$criteria->n($n);
			}

			return $criteria
				->orderBy("id", "desc")
				->queryAll()
			;
		}
	}

	private function checkOwner(Tweet $tweet, Session $session) {
		$user = $session->getPrincipal();

		if ($user->id !== $tweet->user->id) {
			throw new Exception("No puedes editar este tweet");
		}
	}
}