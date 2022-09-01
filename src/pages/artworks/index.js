import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const ArtWorks = () => (
  <Layout>
    <Seo title="작품사진" />
    <h1>작품사진</h1>
    <p>탄핵결정은 공직으로부터 파면함에 그친다. 그러나, 이에 의하여 민사상이나 형사상의 책임이 면제되지는 아니한다. 탄핵소추의 의결을 받은 자는 탄핵심판이 있을 때까지 그 권한행사가 정지된다.</p>
	<p>모든 국민은 법률이 정하는 바에 의하여 공무담임권을 가진다. 헌법재판소는 법관의 자격을 가진 9인의 재판관으로 구성하며, 재판관은 대통령이 임명한다.</p>
	<p>대통령의 선거에 관한 사항은 법률로 정한다. 일반사면을 명하려면 국회의 동의를 얻어야 한다. 국무회의는 대통령·국무총리와 15인 이상 30인 이하의 국무위원으로 구성한다.</p>
	<p>대통령은 법률이 정하는 바에 의하여 사면·감형 또는 복권을 명할 수 있다. 대통령은 전시·사변 또는 이에 준하는 국가비상사태에 있어서 병력으로써 군사상의 필요에 응하거나 공공의 안녕질서를 유지할 필요가 있을 때에는 법률이 정하는 바에 의하여 계엄을 선포할 수 있다.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ArtWorks