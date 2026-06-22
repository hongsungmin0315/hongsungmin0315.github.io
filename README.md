# hongsungmin0315.github.io

홍성민 이력서 · Curriculum Vitae

순수 HTML/CSS/JS 단일 페이지로 빌드 과정 없이 GitHub Pages에 바로 배포됩니다.

- **배포 주소:** https://hongsungmin0315.github.io
- **디자인:** Old Money 베이스 + 절제된 미래지향 액센트(모노스페이스 라벨, 미세 모션, 정밀 그리드)

## 내용 수정

대부분의 텍스트는 `index.html`에서 바로 편집합니다.

| 섹션 | 위치 |
| --- | --- |
| 이름 / 타이틀 / 소개 | `.hero` |
| 자기소개 | `#about` |
| 경력 | `#experience` (`.timeline__item` 복제) |
| 기술 스택 | `#skills` (`.skills__group` 복제) |
| 프로젝트 | `#projects` (`.project` 복제) |
| 연락처 | `#contact` |

색상·폰트는 `styles.css` 상단의 `:root` 변수에서 조정합니다.

## 로컬 미리보기

```bash
python3 -m http.server 8000
# http://localhost:8000
```
