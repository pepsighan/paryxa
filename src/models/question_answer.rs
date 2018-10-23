use schema::question_answers;

#[derive(Identifiable, Queryable)]
pub struct QuestionAnswer {
    id: i32,
    test_room_id: i32,
    test_question_id: i32,
    answered_option: i32,
}

#[derive(Insertable)]
#[table_name = "question_answers"]
pub struct NewQuestionAnswer {
    test_room_id: i32,
    test_question_id: i32,
    answered_option: i32,
}

#[derive(AsChangeset)]
#[table_name = "question_answers"]
pub struct QuestionAnswerPatch {
    answered_option: Option<i32>,
}
