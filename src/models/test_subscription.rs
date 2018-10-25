use diesel::prelude::*;
use errors::SResult;
use models::test_paper::TestPaper;
use schema::test_subscriptions;
use uuid::Uuid;
use Context;

#[derive(Identifiable, Queryable)]
pub struct TestSubscription {
    id: i32,
    uuid: Uuid,
    user_id: i32,
    test_paper_id: i32,
    test_schedule_id: i32,
}

impl TestSubscription {
    pub fn find_all_for_user(user_id: i32, conn: &PgConnection) -> SResult<Vec<TestSubscription>> {
        Ok(test_subscriptions::table
            .filter(test_subscriptions::user_id.eq(user_id))
            .load(conn)?)
    }
}

graphql_object!(TestSubscription: Context | &self | {
    field id() -> Uuid {
        self.uuid
    }

    field test_paper(&executor) -> SResult<TestPaper> {
        TestPaper::find(self.test_paper_id, &executor.context().conn)
    }
});

#[derive(Insertable)]
#[table_name = "test_subscriptions"]
pub struct NewTestSubscription {
    user_id: i32,
    test_paper_id: i32,
    test_schedule_id: i32,
}
