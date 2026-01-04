from fastapi import APIRouter
from sqlalchemy import text
from database import engine

router = APIRouter(prefix="/health")

@router.get("/db")
def check_db():
    with engine.connect() as conn:
        result = conn.execute(text("SELECT 1"))
        return {"db": result.scalar()}
