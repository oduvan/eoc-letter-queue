from checkio_referee import RefereeRank, ENV_NAME



import settings_env
from tests import TESTS


class Referee(RefereeRank):
    TESTS = TESTS
    ENVIRONMENTS = settings_env.ENVIRONMENTS

    DEFAULT_FUNCTION_NAME = "letter_queue"
    FUNCTION_NAMES = {
        "python_3": "letter_queue",
        "js_node": "letterQueue"
    }
    ENV_COVERCODE = {
        
    }