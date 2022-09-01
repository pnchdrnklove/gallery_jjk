import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Exhibitions = () => (
  <Layout>
    <Seo title="전시" />
    <h1>전시</h1>
    <p>재판의 심리와 판결은 공개한다. 다만, 심리는 국가의 안전보장 또는 안녕질서를 방해하거나 선량한 풍속을 해할 염려가 있을 때에는 법원의 결정으로 공개하지 아니할 수 있다.</p>
	<p>국회는 국무총리 또는 국무위원의 해임을 대통령에게 건의할 수 있다. 제2항과 제3항의 처분에 대하여는 법원에 제소할 수 없다. 대통령은 국무총리·국무위원·행정각부의 장 기타 법률이 정하는 공사의 직을 겸할 수 없다.</p>
	<p>정기회의 회기는 100일을, 임시회의 회기는 30일을 초과할 수 없다. 공무원의 직무상 불법행위로 손해를 받은 국민은 법률이 정하는 바에 의하여 국가 또는 공공단체에 정당한 배상을 청구할 수 있다. 이 경우 공무원 자신의 책임은 면제되지 아니한다.</p>
	<p>모든 국민은 근로의 의무를 진다. 국가는 근로의 의무의 내용과 조건을 민주주의원칙에 따라 법률로 정한다. 국가는 지역간의 균형있는 발전을 위하여 지역경제를 육성할 의무를 진다.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Exhibitions